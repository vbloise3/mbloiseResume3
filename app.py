from chalice import Chalice

app = Chalice(app_name='mbloiseResume3')


@app.route('/', cors=True)
def index():
    return {'hello': 'Marin\'s world'}


@app.route('/email/{email}/password/{password}', cors=True)
def hello_email_password(email, password):
    return {'email': email, 'password': password}
# The view function above will return {"hello": "world"}
# whenever you make an HTTP GET request to '/'.
#
# Here are a few more examples:
#
# @app.route('/hello/{name}')
# def hello_name(name):
#    # '/hello/james' -> {"hello": "james"}
#    return {'hello': name}
#
# @app.route('/users', methods=['POST'])
# def create_user():
#     # This is the JSON body the user sent in their POST request.
#     user_as_json = app.current_request.json_body
#     # We'll echo the json body back to the user in a 'user' key.
#     return {'user': user_as_json}
#
# See the README documentation for more examples.
#
