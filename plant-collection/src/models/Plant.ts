export class Plant {
    public id: string;
    public name: string;
    public plantDescription: string;
    public PlantResource: FileList;
    public plantStatus: string;
    constructor(id: string, name: string, plantDescription: string, plantResource: FileList, plantStatus: string) {
        this.id = id;
        this.name = name;
        this.plantDescription = plantDescription;
        this.PlantResource = plantResource;
        this.plantStatus = plantStatus;

    }
}
