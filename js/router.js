var root = null;
var useHash = true; // Defaults to: false
var hash = "#c"; // Defaults to: '#'
window.router = new Navigo(root, useHash, hash);

let $app = document.getElementById("app");
let id

window.router
    .on(`/travel${id}`, function () {
        $app.innerHTML = "<blog-content></blog-content>";
    })
    .resolve();

// xử lý trường hợp người dùng truy cập vào route không tồn tại
window.router.notFound(function () {
    $app.innerHTML = "không tìm thấy trang này";
});
