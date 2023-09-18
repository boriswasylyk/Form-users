

const UserCaerd = ({user, deleteUser, setInfoUpdate}) => {
    
    const Handleclick = () => {
        deleteUser("/users", user.id)
    }
  
    const HandleEdit = () => {
        setInfoUpdate(user)
    }

    return (
        <article class="article_card">
            
            <h3 class="h3_card">.{` ${user.first_name} ${user.last_name}`}</h3>
            
            <ul class="ul_card">
                <li class="li_card"><span class="span_card">Email: </span><span class="span_card_2">{user.email}</span></li>
                <li class="li_card"><span class="span_card">Birthday: </span><span class="span_card_2">{user.birthday}</span></li>
            </ul>
             
            <button class="buttom_cared_delete" onClick={Handleclick}>Delete</button>
           
            <button class="buttom_card_edit" onClick={HandleEdit}>Edit</button>
        
        </article>
    )
}

export default UserCaerd
