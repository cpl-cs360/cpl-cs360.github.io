export const getStaticPaths = () => {
    const data = [];

    const paths = data.map(a => {
        return {
            params: { id: a.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = (context) => {
    const id = context.params.id;
    const data = [];
    const assignment = data.at(data.length - parseInt(id));

    return {
        props: { assignment }
    }
}

const AssignmentDetails = ({ assignment }) => {
    const { id, title, buttonText, buttonPath, description, body } = assignment;
    return (
        <>
            <div layout className="wrapper">
                <h2 layout>Assignment {id < 10 && "0" + id}</h2>
                <h1 layout>{title}</h1>
                <div layout className="assignment-description">
                    {description}
                </div>

            </div>
            <div className="body">
                {body}
            </div>
        </>
    );
}

export default AssignmentDetails;