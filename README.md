📘 iGebra Assignment – Student Performance Analysis Dashboard
This project combines Data Science (Python + Jupyter) and Web Development (Next.js + Material UI + Recharts) to create a full workflow for analyzing student performance and visualizing results on a dashboard.  

📂 Folder Structure
Igebra/
│
├─ data/
│ └─ synthetic_students.csv # Generated student dataset (CSV)
│
├─ notebooks/
│ └─ analysis_notebook.ipynb # Jupyter Notebook for analysis & ML
│
├─ plots/
│ ├─ attention_vs_score.png # Attention vs Score plot
│ ├─ comprehension_vs_score.png # Comprehension vs Score plot
│ └─ score_distribution.png # Score distribution histogram
│
├─ models/
│ └─ student_performance_model.pkl # Trained ML model (Pickle file)
│
├─ nextjs_dashboard/
│ ├─ src/app/page.js # Next.js Dashboard main page
│ ├─ package.json # Node.js dependencies
│ └─ (other Next.js boilerplate files)
│
├─ README.md
└─ .gitignore


🔧 Setup Instructions
1️⃣ Python Environment Setup
cd Igebra
python -m venv venv

Activate the environment:
Windows:
venv\Scripts\activate

Mac/Linux:
source venv/bin/activate

Install dependencies:
pip install pandas numpy matplotlib seaborn scikit-learn jupyter

2️⃣ Running Jupyter Notebook
cd notebooks
jupyter notebook analysis_notebook.ipynb

Inside the notebook, run the cells step by step. It will:
✅ Generate synthetic dataset → saved in data/synthetic_students.csv
✅ Perform data analysis (average score, correlations, etc.)
✅ Create and save plots → stored in plots/
✅ Train ML model → saved as models/student_performance_model.pkl
3️⃣ Running Next.js Dashboard
cd ../nextjs_dashboard
npm install
npm run dev

Open browser → http://localhost:3000
📊 Dashboard Features

Average Metrics (Score, Attention, Comprehension)
Bar Charts for:
Assessment Scores
Attention vs Score
Comprehension vs Score


Responsive Design using Material UI + Recharts

🧠 How Each Folder Works

data/ → Stores student dataset (synthetic_students.csv). Created automatically by Jupyter Notebook if not already present.
notebooks/ → Contains analysis_notebook.ipynb. Handles dataset creation, EDA, plots, and ML model training.
plots/ → Stores .png charts generated from notebook (score distribution, attention vs score, comprehension vs score).
models/ → Stores saved ML models in .pkl format (student_performance_model.pkl).
nextjs_dashboard/ → Contains the frontend application (Next.js). Main dashboard page: src/app/page.js. Fetches (currently hardcoded) data and renders charts.

🧪 Workflow

Run Notebook → Generate data, plots, and ML model.
Check Plots → Found inside plots/.
Use Dashboard → Visualize insights interactively.
(Optional Future) → Connect dashboard to real CSV/API data.

🚀 Future Improvements

Connect dashboard to real CSV from data/.
Serve ML model predictions to frontend.
Add authentication (students/teachers).
Improve UI with filtering and searching.

🧑‍💻 Contribution Guidelines
# 1. Fork the repository
# 2. Create a branch
git checkout -b feature-name

# 3. Commit changes
git commit -m "Added feature"

# 4. Push branch
git push origin feature-name

# 5. Open Pull Request

✅ Summary

Data & Analysis → Python (Jupyter)
Visualization & ML → Plots + Models saved locally
Frontend → Next.js Dashboard with Recharts + Material UI

This project gives a complete cycle: data → analysis → model → visualization 🚀