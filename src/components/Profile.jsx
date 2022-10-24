const user={
    name:"Haddy",
    imageUrl:"https://i.imgur.com/yXOvdOSs.jpg",
    imageSize:90
}

export default function Profile(){
    return(
        <div>
            <h1>{user.name}</h1>
            <img 
              alt={`${user.name}`}
              src={user.imageUrl}
              style={
                {width:user.imageSize,
                 height:user.imageSize
                }}
              className="rounded-full"
            />
        </div>
    )
}