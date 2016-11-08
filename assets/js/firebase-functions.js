function updateProfileInfo(userUID, userName, location, kindUser,privateName, gender, email, cellCodeCountry, cellNumber ){
    
    var updateInfo = {
        displayName: userName,
        location: location,
        kind_use: kindUser,
        photoUrl:"Imagen de perfil",
        photoBackgroudUrl:"Imagen del fondo del perfil",

        privateInfo:{
            name: privateName,
            gender: gender,

            cellPhoneNumber:{ codeContry:cellCodeCountry, number:cellNumber},
            email:email,
        }
    };
    
    var updates = {};
    updates['/users/' + userUID] = updateInfo;
    
    return firebase.database().ref().update(updates);
    
    
}

/*function updateProfileInfoBusiness(){
    
    
}*/