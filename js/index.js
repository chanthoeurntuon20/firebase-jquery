$(document).ready(function () {
    db.collection('student-firebase').get().then((data) => {
        var result = "";
        data.forEach(element => {
            result += `
            <div class="card mt-5 shadow-lg">
                <div class="card-header">
                    <img src = "${element.data().profile}" class = "img-fluid rounded-circle" width = "30">
                    ${element.data().name}
                    <button type="button" class="btn btn-primary float-right"  data-toggle="modal" data-target="#view${element.id}">View</button>
                </div>

                <div class="card-body">
                    <img src = "${element.data().profile}" class = "img-fluid">
                </div>

                <div class="card-footer">
                    ${element.data().text}
                    <button class = "btn btn-danger float-right" onclick = "deleteData('${element.id}')" type = "button">Delete
                </div>
            </div>

                <div class="modal fade" id="view${element.id}">
                <div class="modal-dialog">
                <div class="modal-content">
                
                    <!-- Modal Header -->
                    <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    
                    <!-- Modal body -->
                    <div class="modal-body">
                        <img src = "${element.data().profile}" class = "img-fluid">
                    </div>
                    
                </div>
                </div>
            </div>
          
            `
        });
        $('#display').append(result);
    })
    $('#add').on('click', function () {
        var name = $('#name').val();
        var profile = $('#profile').val();
        var post = $('#post').val();
        var text = $('#text').val();
        db.collection('student-firebase').add({
            name: name,
            profile: profile,
            post: post,
            text: text
        })
    })

})
function deleteData(dId) {
    db.collection('student-firebase').doc(dId).delete();
}
