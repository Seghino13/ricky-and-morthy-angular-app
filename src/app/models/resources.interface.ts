export interface Resources{
    info: Info;
    results: Results[];
}

export interface Info{
    count: number,
    pages: number,
    next: string;
    prev: string; 
}

export interface Results{
    id: number,
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[],
    url: string;
    created: string;   
}

export interface Origin{
    name: string;
    url: string;
}

export interface Location{
    name: string;
    url: string;  
}

export interface Locations{
    info: Info;
    results: ResultsLocations[];
}

export interface ResultsLocations{
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}

export interface Episodies{
    info: Info;
    results: ResultEpisodies[];
}

export interface ResultEpisodies{
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}