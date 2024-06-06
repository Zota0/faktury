package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	_ "github.com/lib/pq"
)

func DbConnect() *sql.DB {
	DB_URI := os.Getenv("DB_URI")

	db, err := sql.Open("postgres", DB_URI)
	if err != nil {
		log.Fatal(err)
		return nil
	}
	return db
}

func main() {

	http.HandleFunc("/", Working)
	http.HandleFunc("/api/new", New)

	log.Fatal(http.ListenAndServe(":5432", nil))
}

func Working(w http.ResponseWriter, r *http.Request) {
	// Set appropriate content type header
	w.Header().Set("Content-Type", "application/json")

	// Allow CORS for GET requests (adjust methods as needed)
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")

	// Define the data you want to return
	data := map[string]string{"working": "true"}

	// Encode data to JSON format
	encoder := json.NewEncoder(w)
	err := encoder.Encode(data)
	if err != nil {
		// Handle encoding error gracefully (e.g., log and return appropriate response)
		log.Printf("Error encoding JSON: %v", err)
		fmt.Fprintf(w, "Error: %v", err) // Example error response
		return
	}
}

func New(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")

	db := DbConnect()
	if db == nil {
		fmt.Fprintf(w, "Error: Database connection failed")
		return
	}

	db_data, db_data_error := db.Exec("SELECT id FROM invoices")
	if db_data_error != nil {
		fmt.Fprintf(w, "Error executing query: %v", db_data_error)
		return
	}

	encoder := json.NewEncoder(w)
	encoder_error := encoder.Encode(db_data)
	if encoder_error != nil {
		log.Printf("Error encoding JSON: %v", encoder_error)
		fmt.Fprintf(w, "Error: %v", encoder_error)
		return
	}
}
