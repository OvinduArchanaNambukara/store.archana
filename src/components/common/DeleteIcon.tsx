import React from "react";
import {FiTrash} from "react-icons/all";
import {deleteIconColor} from "../../custom-styles/deleteIconStyles";


type DeleteIconProps = {
    size: number
    onDeleteClick: () => void
}

const DeleteIcon: React.FC<DeleteIconProps> = (props) => {
    const {size, onDeleteClick} = props;

    return (
        <React.Fragment>
            <FiTrash className="delete-icon" size={size} color={deleteIconColor} onClick={onDeleteClick}/>
        </React.Fragment>
    );
}

export default DeleteIcon;

