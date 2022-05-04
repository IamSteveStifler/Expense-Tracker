import { Table} from "react-bootstrap";

const Structure = (props) => {
    return(
        <div>
            <Table striped bordered hover variant="dark">
        <thead>
            <tr>
            <th>#</th>
            <th>Name : </th>
            <th>Email : </th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{props.id}</td>
            <td>{props.data.name} </td>
            <td> {props.data.email} </td>
            
            </tr>
                
        </tbody>
    </Table>
        </div>

    );
}

export default Structure;