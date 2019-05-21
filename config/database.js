if(process.env.NODE_ENV==='production'){
    module.exports={mongoURI:
        "mongodb://ohduck1:ohduck1@ds159546.mlab.com:59546/notesjet"
    }
}
else{
    module.exports={mongoURI:
        "mongodb://localhost/vidjot-dev"
    }
}

