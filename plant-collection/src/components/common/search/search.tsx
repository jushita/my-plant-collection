import * as React from 'react';
import { Plant } from '../../../models/Plant';
import { useForm } from 'react-hook-form';

export interface SearchProps {
    plants: Plant[],
    search: (searchResults: Plant[]) => void;

}

interface IFormInput {
    plantName: string;
}

export default function Search(props: SearchProps) {

    let { register, handleSubmit } = useForm<IFormInput>();

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState<Plant[]>([]);
    const handleChange = (e: any) => {
        if (searchResults) {
            props.search(searchResults);
        }
    }

    function search(input: IFormInput) {
        setSearchTerm(input.plantName);
    }

    React.useEffect(() => {
        if (props.plants) {
            const results: Plant[] = props.plants.filter(plant =>
                plant.plantName.toLowerCase().includes(searchTerm)
            );
            setSearchResults(results);
        }
    }, [searchTerm]);

    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <div className="form-item">
                    <input
                        type="text"
                        placeholder="Search"
                        name="plantName"
                        ref={register({ required: true })}
                        className="form-input"
                        onChange={handleChange}
                    />
                    <div className="form-item">
                        <button className="custom-button" type="submit" onClick={() => search}>Submit</button>
                    </div>
                </div>
            </form>
        </div>



    );
}
