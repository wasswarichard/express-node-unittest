const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const ABSENCES_PATH = path.join(__dirname, '../../json_files', 'absences.json');
const MEMBERS_PATH = path.join(__dirname, '../../json_files', 'members.json');

const readJsonFile = (path) => {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(path, 'utf8', (error, jsonString) => {
                if(error){
                    return  reject(error)
                }
                return resolve(JSON.parse(jsonString));
            })
        }
        catch (error) {
            return reject(error)
        }
    })
}

router.get('/v1a/members',(req, res) => {
    readJsonFile(MEMBERS_PATH)
        .then(data => {
            res.writeHead(200);
            return res.end(JSON.stringify(data.payload))
        })
        .catch(error => {
            res.status(400).send(error)
        })
});
router.get('/v1a/absence', (req, res) => {
    readJsonFile(ABSENCES_PATH)
        .then(data => {
            res.writeHead(200);
            return res.end(JSON.stringify(data.payload))
        })
        .catch(error => {
            res.status(400).send(error)
        });

});

module.exports = router;