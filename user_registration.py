from flask import request, jsonify
from werkzeug.security import generate_password_hash

@app.route('/register', methods=['POST'])
def register():
    try:
        # Get user input
        user_data = request.json
        full_name = user_data['full_name']
        email = user_data['email']
        password = user_data['password']
        user_type = user_data['user_type']  # e.g., "hirer" or "owner"
        
        # Hash the password
        hashed_password = generate_password_hash(password)

        # Insert into the database
        conn = get_db_connection()
        cursor = conn.cursor()

        query = """
        INSERT INTO users (full_name, email, password, user_type)
        VALUES (%s, %s, %s, %s)
        """
        cursor.execute(query, (full_name, email, hashed_password, user_type))
        conn.commit()

        # Close the connection
        cursor.close()
        conn.close()

        return jsonify({'message': 'User registered successfully!'}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

#registration_validaion
if not email or '@' not in email:
    return jsonify({'error': 'Invalid email address!'}), 400

if len(password) < 8:
    return jsonify({'error': 'Password must be at least 8 characters long!'}), 400

