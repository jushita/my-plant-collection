export class Plant {
    public PlantId: string;
    public PlantName: string;
    public PlantDescription: string;
    public PlantResource: string;
    public PlantStatus: string;

    constructor(id: string, name: string, plantDescription: string, PlantResource: string, plantStatus: string) {
        this.PlantId = id;
        this.PlantName = name;
        this.PlantDescription = plantDescription;
        this.PlantResource = PlantResource;
        this.PlantStatus = plantStatus;

    }
}
