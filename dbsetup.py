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

        # Seed tables
        cursor.execute("""
        INSERT INTO book_reviews (bookname, rating, review, bookimage, author) VALUES
        ('One Up On Wall Street', 5, 'One Up On Wall Street is a fascinating book by Peter Lynch. It gives an investor great pieces of advice on how to approach a publicly traded company, build up its story, and offer tips on spotting opportunities. This book is quite dense in information, which could necessitate a re-read to absorb most of the concepts it introduces.', '/book_images/ouows.png', 'Peter Lynch'),
        ('WAR', 4, 'A fascinating take into one of the most tumultuous times, Bob Woodward guides you through the political environment rife with uncertainty post COVID-19, what the role the US played in the Israeli-Palestine Conflict and Ukraine, and the ever-looming presence of Donald J. Trump.', '/book_images/war_bobwoodward.png', 'Bob Woodward')
        """)
        conn.commit()
        conn.close()
    except Exception as e:
        print("Unable to connect.")
        print(e)
        