export interface DateTime {
    // Date without time
    year: number;
    month: number;
    day: number;

    // Optional custom separator
    separator?: string;

    // Optional time
    hour?: number;
    minute?: number;

    // Optional timezone
    timezone?: string;
}

export interface ComponentParams {
    name: string;
    price: number;
    quantity: number;

    // Optional different VAT
    vat?: number;
}

export interface InvoiceParams {
    
    // General
    id : number;
    components: Array<ComponentParams>;
    total_price: number;
    vat: string;
    date: DateTime;

    delivery_type: {
        // type of pickup|delivery|other
        d_type: string;
        d_date?: DateTime;
        d_company?: string;
        d_price?: number;
    }

    // Seller informations
    seller: {
        // Informations
        c_name: string;
        c_nip: string;
        c_person?: string;

        // Address
        c_country: string;
        c_city: string;
        c_zipCode: string;
        c_Street: string;
        c_houseNumber: string;
        c_apartment: string;
        
        // Contact
        c_phone: string;
        c_email: string;

    }

    // Buyer informations
    buyer: {
        // Informations
        b_name: string;
        b_nip?: string;
        c_person?: string;

        // Address
        c_country: string;
        c_city: string;
        c_zipCode: string;
        c_Street: string;
        c_houseNumber: string;
        c_apartment: string;

        // Contact
        c_phone: string;
        c_email: string;

    }
}