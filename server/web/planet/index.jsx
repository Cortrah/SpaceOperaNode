var React = require('react/addons');
var Layout = require('../layouts/Default.jsx');


var Component = React.createClass({
    render: function () {

        return (
            <Layout
                title="Planet Map"
                activeTab="planet">
            </Layout>
        );
    }
});


module.exports = Component;
