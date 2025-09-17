"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import InsightsIcon from "@mui/icons-material/Insights";

// === Example dataset ===
const students = [
  {
    id: 1,
    name: "Rachel",
    assessment: { score: 85 },
    skills: { attention: 82, comprehension: 78, focus: 80, retention: 75 },
    engagement_time: 120,
  },
  {
    id: 2,
    name: "John",
    assessment: { score: 72 },
    skills: { attention: 70, comprehension: 74, focus: 68, retention: 72 },
    engagement_time: 95,
  },
  {
    id: 3,
    name: "Maria",
    assessment: { score: 90 },
    skills: { attention: 88, comprehension: 92, focus: 85, retention: 89 },
    engagement_time: 140,
  },
];

// === Flatten dataset for charts ===
const chartData = students.map((s) => ({
  name: s.name,
  score: s.assessment?.score || 0,
  attention: s.skills?.attention || 0,
  comprehension: s.skills?.comprehension || 0,
  focus: s.skills?.focus || 0,
  retention: s.skills?.retention || 0,
}));

// === Calculate averages safely ===
const avgScore =
  students.length > 0
    ? (
        students.reduce((sum, s) => sum + (s.assessment?.score || 0), 0) /
        students.length
      ).toFixed(1)
    : 0;

const avgAttention =
  students.length > 0
    ? (
        students.reduce((sum, s) => sum + (s.skills?.attention || 0), 0) /
        students.length
      ).toFixed(1)
    : 0;

const avgComprehension =
  students.length > 0
    ? (
        students.reduce((sum, s) => sum + (s.skills?.comprehension || 0), 0) /
        students.length
      ).toFixed(1)
    : 0;

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  // Radar chart uses one student's profile
  const radarStudent = chartData[0]; // Rachel by default
  const radarData = [
    { skill: "Attention", value: radarStudent.attention },
    { skill: "Comprehension", value: radarStudent.comprehension },
    { skill: "Focus", value: radarStudent.focus },
    { skill: "Retention", value: radarStudent.retention },
  ];

  return (
    <div style={{ padding: 20, backgroundColor: "#111", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ color: "white", fontWeight: "bold", mb: 4 }}
      >
        📊 Cognitive Skill Dashboard
      </Typography>

      {/* === Top Summary Cards === */}
      <Grid container spacing={3} sx={{ mb: 2 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <SchoolIcon color="primary" fontSize="large" />
              <Typography variant="h6">Avg Score</Typography>
              <Typography variant="h5">{avgScore}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <PsychologyIcon color="secondary" fontSize="large" />
              <Typography variant="h6">Avg Attention</Typography>
              <Typography variant="h5">{avgAttention}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <InsightsIcon style={{ color: "green" }} fontSize="large" />
              <Typography variant="h6">Avg Comprehension</Typography>
              <Typography variant="h5">{avgComprehension}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* === Charts === */}
      <Grid container spacing={3}>
        {/* Bar Chart: Scores */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Assessment Scores</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" fill="#8884d8" name="Score" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Bar Chart: Attention vs Score */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Attention vs Score</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="attention" fill="#82ca9d" name="Attention" />
                  <Bar dataKey="score" fill="#ffc658" name="Score" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Scatter Chart: Attention vs Score */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Scatter: Attention vs Score</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <ScatterChart>
                  <XAxis type="number" dataKey="attention" name="Attention" />
                  <YAxis type="number" dataKey="score" name="Score" />
                  <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                  <Legend />
                  <Scatter name="Students" data={chartData} fill="#8884d8" />
                </ScatterChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Radar Chart: One Student Profile */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Radar: Student Profile</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart outerRadius={90} data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="skill" />
                  <PolarRadiusAxis />
                  <Radar
                    name={radarStudent.name}
                    dataKey="value"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* === Student Table === */}
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6">Student Table</Typography>
          <TextField
            label="Search Student"
            variant="outlined"
            size="small"
            sx={{ mb: 2 }}
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Score</TableCell>
                  <TableCell>Attention</TableCell>
                  <TableCell>Comprehension</TableCell>
                  <TableCell>Focus</TableCell>
                  <TableCell>Retention</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredStudents.map((s) => (
                  <TableRow key={s.id}>
                    <TableCell>{s.name}</TableCell>
                    <TableCell>{s.assessment?.score}</TableCell>
                    <TableCell>{s.skills?.attention}</TableCell>
                    <TableCell>{s.skills?.comprehension}</TableCell>
                    <TableCell>{s.skills?.focus}</TableCell>
                    <TableCell>{s.skills?.retention}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* === Insights Section === */}
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6">Insights</Typography>
          <ul>
            <li>
              Students with higher attention generally achieve higher scores.
            </li>
            <li>Average score across class is {avgScore}.</li>
            <li>
              {students[0].name} shows strong comprehension and attention
              balance.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
