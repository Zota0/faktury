package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

func main() {
	const DB_URI = os.getEnv("DB_URI")

	db, err := sql.Open("postgres", DB_URI)
	if err != nil {
		log.Fatal(err)
	}

	http.HandleFunc("/", Working)
	http.HandleFunc("/api/new", New)

	log.Fatal(http.ListenAndServe(":9586", nil))
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

	data := map[string]string{}

	encoder := json.NewEncoder(w)
	err := encoder.Encode(data)
	if err != nil {
		log.Printf("Error encoding JSON: %v", err)
		fmt.Fprintf(w, "Error: %v", err)
		return
	}
}
