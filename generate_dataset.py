import pandas as pd
import numpy as np
from faker import Faker
import random

# Initialize faker for fake names
fake = Faker()

# Number of students
num_students = 250

# Create empty list for student data
students = []

for i in range(1, num_students + 1):
    student_id = i
    name = fake.first_name()
    class_name = random.choice(["Class A", "Class B", "Class C", "Class D"])

    # Generate random cognitive skills (scale 0–100)
    comprehension = random.randint(40, 100)
    attention = random.randint(30, 100)
    focus = random.randint(35, 100)
    retention = random.randint(40, 100)
    engagement_time = random.randint(20, 120)  # minutes per week

    # Assessment score is influenced by skills (with some noise)
    assessment_score = int(
        0.3 * comprehension +
        0.25 * attention +
        0.2 * focus +
        0.15 * retention +
        0.1 * (engagement_time / 1.2) +
        np.random.normal(0, 5)  # noise
    )

    # Keep score within 0–100
    assessment_score = max(0, min(100, assessment_score))

    students.append([
        student_id, name, class_name,
        comprehension, attention, focus,
        retention, assessment_score, engagement_time
    ])

# Create DataFrame
columns = ["student_id", "name", "class", "comprehension",
           "attention", "focus", "retention",
           "assessment_score", "engagement_time"]

df = pd.DataFrame(students, columns=columns)

# Save dataset
df.to_csv("synthetic_students.csv", index=False)

print("✅ Dataset created: synthetic_students.csv with", num_students, "rows")
