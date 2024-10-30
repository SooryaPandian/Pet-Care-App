import sqlite3
from models import db, User, ForumPost, Reply
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

DATABASE_URI = 'sqlite:///users.db'

def print_table_data(session, table, exclude_fields=None):
    exclude_fields = exclude_fields or []
    print(f"\n{table.__tablename__.capitalize()} Table:")
    for row in session.query(table).all():
        row_data = {column: value for column, value in row.__dict__.items() if column not in exclude_fields}
        print(row_data)

def main():
    engine = create_engine(DATABASE_URI)
    Session = sessionmaker(bind=engine)
    session = Session()

    print_table_data(session, User)
    print_table_data(session, ForumPost, exclude_fields=['_sa_instance_state', 'image'])
    print_table_data(session, Reply, exclude_fields=['_sa_instance_state'])

    session.close()

if __name__ == '__main__':
    main()
