const express = require('express');


const path = require("path");

const app = express();

app.use(  set_content_type );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/admin/", admin_router);
app.use("/api/post", post_router);
app.use("/api/message", message_router);
app.use("/api/user", user_router);

app.use(express.static(path.join(__dirname, 'UI')));
app.listen(2718, () => {

    data_base.read_data_from_file().then(r => {
        admin.create_admin().then(r => console.log("admin create") );});
});


