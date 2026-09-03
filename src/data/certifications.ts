export interface CertificationItem {
  period: string;
  titleEn: string;
  titleDe: string;
  org: string;
  notesEn?: string[];
  notesDe?: string[];
}

export const certifications: CertificationItem[] = [
  {
    period: "2026",
    titleEn:
      "Nanodegree — Big Data and Data Science: Fundamentals, Methods and Technologies",
    titleDe:
      "Nanodegree — Big Data und Data Science: Grundlagen, Methoden und Technologien",
    org: "Wilhelm Büchner Hochschule",
    notesEn: [
      "Data analysis and preprocessing, exploratory data analysis, data mining and machine learning, regression, classification and clustering",
      "Python, R, Apache Spark and Hadoop",
    ],
    notesDe: [
      "Datenanalyse und -aufbereitung, explorative Datenanalyse, Data Mining und maschinelles Lernen, Regression, Klassifikation und Clustering",
      "Python, R, Apache Spark und Hadoop",
    ],
  },
];
