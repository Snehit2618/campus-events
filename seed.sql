-- seed.sql

-- Insert Colleges
INSERT INTO colleges (name) VALUES
  ('Tech University'),
  ('Engineering College 1'),
  ('State University'),
  ('City Tech')
ON CONFLICT DO NOTHING;

-- Insert Students
INSERT INTO students (name, college_id) VALUES
  ('Alice Johnson', 1),       -- Tech University
  ('Bob Smith', 1),           -- Tech University
  ('Charlie Davis', 2),       -- Engineering College 1
  ('Dana Lee', 2),            -- Engineering College 1
  ('Eliot Grant', 3),         -- State University
  ('Fiona Wells', 4)          -- City Tech
ON CONFLICT DO NOTHING;

-- Insert Events
INSERT INTO events (name, type, date, college_id) VALUES
  ('Hackathon 2025', 'Workshop', '2025-09-15', 1),    -- Tech University
  ('Tech Fest 2025', 'Fest', '2025-09-20', 1),        -- Tech University
  ('AI Seminar', 'Seminar', '2025-10-01', 2),         -- Engineering College 1 
  ('Coding Contest', 'Hackathon', '2025-09-30', 3)    -- State University
ON CONFLICT DO NOTHING;

-- Insert Registrations
INSERT INTO registrations (student_id, event_id) VALUES
  (1, 1),   -- Alice Johnson at Hackathon 2025
  (2, 1),   -- Bob Smith at Hackathon 2025
  (3, 3),   -- Charlie Davis at AI Seminar
  (4, 3),   -- Dana Lee at AI Seminar
  (5, 4),   -- Eliot Grant at Coding Contest
  (6, 4)    -- Fiona Wells at Coding Contest
ON CONFLICT DO NOTHING;

-- Insert Attendance
INSERT INTO attendance (student_id, event_id, status) VALUES
  (1, 1, TRUE),    -- Alice attended Hackathon 2025
  (2, 1, TRUE),    -- Bob attended Hackathon 2025
  (3, 3, TRUE),    -- Charlie attended AI Seminar
  (4, 3, FALSE),   -- Dana registered but did not attend AI Seminar
  (5, 4, TRUE),    -- Eliot attended Coding Contest
  (6, 4, TRUE)     -- Fiona attended Coding Contest
ON CONFLICT DO NOTHING;

-- Insert Feedback
INSERT INTO feedback (student_id, event_id, rating) VALUES
  (1, 1, 4),    -- Alice's feedback for Hackathon 2025
  (2, 1, 5),    -- Bob's feedback for Hackathon 2025
  (3, 3, 4),    -- Charlie's feedback for AI Seminar
  (5, 4, 4),    -- Eliot's feedback for Coding Contest
  (6, 4, 5)     -- Fiona's feedback for Coding Contest
ON CONFLICT DO NOTHING;
