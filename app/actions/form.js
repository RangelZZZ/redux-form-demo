import superagenet from "superagent";
import async from "async";

// use await
// function submitForm(values) {
//     return async (dispath) => {
//         const response = await sendRequest(values);
//         return dispath(saveForm(response.body))
//     }
// }


//use promise
//
// function submitForm(values) {
//     return (dispatch) => {
//         new Promise((resolve, reject) => {
//             superagenet.post('/')
//                 .send(values)
//                 .end(function (err, res) {
//                     if (err) {
//                         reject(err);
//                     }
//                     resolve(res.body);
//                 })
//         }).then((values) => {
//             dispatch(saveForm(values))
//         }).catch((reason) => {
//             return reason;
//         });
//     }
// }


// use async.waterfall

function submitForm(values) {
    return (dispatch) => {
        async.waterfall([(done) => {
            superagenet.post("/")
                .send(values)
                .end(function (err, res) {
                    done(err, res.body);
                })
        }], (err, data) => {
            if (err) {
                return err;
            }
            dispatch(saveForm(data));
        })
    }
}


function saveForm(data) {
    return {
        type: "SEND",
        data
    }
}

// const sendRequest = (values) => {
//     return superagenet
//         .post('/')
//         .send(values)
// };

module.exports = {
    submitForm: submitForm
};