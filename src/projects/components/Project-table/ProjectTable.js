import React,{useState} from 'react';
import './ProjectTable.css'
import Card from "../../../shard/components/UIElements/Card";
import Button from "../../../shard/components/FormElements/Button";
import Status from "../Status/Status";
import {FaEllipsisH} from "react-icons/fa";
import {Link, useHistory} from 'react-router-dom';
import Modal from "../../../shard/components/UIElements/Modal";
import {axiosProjects} from "../../../shard/axios/axios-project";
import {useStorage} from "../../../shard/hooks/storage-hook";

const transferDate=(date)=>{
    const d=new Date(date)
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`
}
function ProjectTable(props) {
    const {projects,valueSearch}=props;
    const history=useHistory();
    const [error,setError]=useState();
    const [projectId,setProjectId]=useState()
    // get token and user for  deletig process
    const [token,user]=useStorage();
    // console.log(token,user)
    //****************** Delete process *********
    //modal to confirm
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true);
    };

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
    };

    const confirmDeleteHandler = () => {
        setShowConfirmModal(false);
        deleteProjectFunction();
    };
    // Delete project handler -
    const deleteHandlerStart=(projectId)=>{
        setError("");
        setProjectId(projectId);
        showDeleteWarningHandler();
    }
    //Delete project from the server
    //http://localhost:4001/projects/38/user/32
    const deleteProjectFunction=async ()=>{
        try{

            const res=await axiosProjects(token).delete(`/${projectId}/user/${user.id}`)
            // console.log('response :',res)
            if(res){
                props.refreshProjects();
            }
        }catch (e) {
            console.log("Error : ",e)
            setError("Error, project was not deleted")
        }

    }
    //**************End delete process here ****************


    // receive projects from the projects component and filter it
    const renderProjects= projects.filter(item => {
        // console.log(item)
        if (!valueSearch) return true
        if (item.name.toLowerCase().includes(valueSearch.toLowerCase())
            ||item.status_progress.toLowerCase().includes(valueSearch.toLowerCase())
            ||item.price.toString()===valueSearch || item.resources.toString()===valueSearch ||item.complicity.toString()===valueSearch
        ) {
            return true
        }

    })
        .map(p=>(<tr key={p.id}>
            <td>{p.name}</td>
            <td><div className="product-table-main-status">
                <Status status={p.status_provider.toString().trim()}
                ></Status> {p.status_progress}</div></td>
            <td>{p.resources}</td>
            <td>{p.price} $</td>
            <td>{p.complicity} %</td>
            <td>{transferDate(p.start_date)}</td>
            <td>{transferDate(p.end_date)}</td>
            <td>{(p.offers===0||p.offers===null)? 0 :p.offers} %</td>
            <td>
                <div className='project-table-sub-menu'>
                    <div className="project-table-sub-icon">
                        <FaEllipsisH></FaEllipsisH>
                    </div>

                    <div className='project-table-sub-icon-content'>
                        <Link to={`/update-project/${p.id}`}>Edit</Link>
                        <button onClick={()=>deleteHandlerStart(p.id)}>Delete</button>
                    </div>
                </div>

            </td>
        </tr>))


    return (
        <>
            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Are you sure?"
                footerClass="project-table__modal-actions"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={cancelDeleteHandler}>
                            CANCEL
                        </Button>
                        <Button danger onClick={confirmDeleteHandler}>
                            DELETE
                        </Button>
                    </React.Fragment>
                }
            >
                <p>
                    Do you want to proceed and delete this project? Please note that it
                    can't be undone thereafter.
                </p>
            </Modal>
        <div className='project-table-container'>
            <Card>
                <div className='project-table-card-header'>
                    <h4>Projects</h4>
                    {error && <h5
                    style={{color:'red'}}>{error}</h5>}
                    {/* button to create new project */}
                    <div className="project-table-card-header-button">
                        <Button type='button'
                                size={'small'}
                                onClick={()=>history.push('/new-project')}
                        >Create Project</Button>
                    </div>
                </div>
                <div className="project-table-main">
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Resources</th>
                            <th>Price</th>
                            <th>Complicity</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Offers</th>
                        </tr>
                        </thead>
                        <tbody>
                        {renderProjects}
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        <tr><td></td></tr>
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
</>
    );
}

export default ProjectTable;
