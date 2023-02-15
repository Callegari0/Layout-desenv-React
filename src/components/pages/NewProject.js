import { useNavigate } from 'react-router-dom';

import './NewProject.modules.css';
import ProjectForm from '../project/ProjectForm';

function NewProject() {

    const navigate = useNavigate();

    function testeNav() {
        navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } })
    }

    function createPost(project) {

        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                // redirect
                testeNav()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='newproject_container'>
            <h1>NewProject</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject;