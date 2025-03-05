import psycopg2
import json

with open("./config/db.json", 'r') as f:
    login = json.load(f)
    try:
        conn = psycopg2.connect(
            database=login["database"],
            user=login["user"],
            password=login["password"],
            host=login["host"],
            port=login["port"]
        )
        print("Connected!")
        cursor = conn.cursor()

        # Request to drop the table.
        if(input("Drop tables? (y/N): ").lower() == "y"):
            cursor.execute("DROP TABLE book_reviews;")
            conn.commit();
        # Set up tables
        cursor.execute("""
        CREATE TABLE book_reviews
        (
            id                  SERIAL PRIMARY KEY,
            bookname            TEXT NOT NULL,
            rating              INTEGER NOT NULL, 
            review              TEXT NOT NULL,
            bookimage           TEXT NOT NULL,
            author              TEXT NOT NULL
        );
        """)
        conn.commit()
        conn.close()
    except Exception as e:
        print("Unable to connect.")
        print(e)
        