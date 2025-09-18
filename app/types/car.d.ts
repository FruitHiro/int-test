export interface CarItem {
    id: number;
    year: number;
    make: string;
    model: string;
    submodel?: string;
}

export interface CarInfo extends CarItem {
    make_id?: number;
    model_id?: number;
    submodel_id?: number;
    series?: string;
    trim?: string;
    description?: string;
    msrp?: number;
    invoice?: number;
    image?: string;
}
