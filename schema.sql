CREATE TABLE colleges (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  college_id INTEGER NOT NULL,
  FOREIGN KEY (college_id) REFERENCES colleges(id) ON DELETE CASCADE
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(50) NOT NULL,
  date DATE NOT NULL,
  college_id INTEGER NOT NULL,
  FOREIGN KEY (college_id) REFERENCES colleges(id) ON DELETE CASCADE
);

CREATE TABLE registrations (
  id SERIAL PRIMARY KEY,
  student_id INTEGER NOT NULL,
  event_id INTEGER NOT NULL,
  UNIQUE(student_id, event_id),
  FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);

CREATE TABLE attendance (
  id SERIAL PRIMARY KEY,
  student_id INTEGER NOT NULL,
  event_id INTEGER NOT NULL,
  status BOOLEAN NOT NULL,
  UNIQUE(student_id, event_id),
  FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);

CREATE TABLE feedback (
  id SERIAL PRIMARY KEY,
  student_id INTEGER NOT NULL,
  event_id INTEGER NOT NULL,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  UNIQUE(student_id, event_id),
  FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);
