if(process.env.NODE_ENV==='production'){
    module.exports={mongoURI:
        "mongodb://prashant:111111a@ds159546.mlab.com:59546/notesjet"
    }
}
else{
    module.exports={mongoURI:
        "mongodb://localhost/vidjot-dev"
    }
}

