import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Define styles for the PDF document
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 15,
  },
  header: {
    backgroundColor: '#0056b3',
    color: 'white',
    padding: 10,
    textAlign: 'center',
  },
  heading: {
    fontSize: 16,
    marginBottom: 10,
    color: '#0056b3',
  },
  text: {
    fontSize: 12,
    color: '#333',
  },
  listItem: {
    marginBottom: 5,
  },
});

export function PDFDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>John Doe</Text>
          <Text>Web Developer</Text>
          <Text>Email: johndoe@example.com | Phone: (123) 456-7890 | Location: City, Country</Text>
        </View>

        {/* Profile Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>Profile</Text>
          <Text style={styles.text}>
            A highly motivated and skilled web developer with over 3 years of experience in designing
            and developing web applications. Proficient in front-end and back-end technologies, with
            a passion for creating responsive, user-friendly websites and applications.
          </Text>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>Skills</Text>
          <Text style={styles.text}>HTML, CSS, JavaScript, React, Node.js, Tailwind CSS</Text>
        </View>

        {/* Work Experience Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>Work Experience</Text>
          <Text style={{ ...styles.text, fontWeight: 'bold' }}>Front-End Developer</Text>
          <Text style={styles.text}>Tech Company | Jan 2021 - Present</Text>
          <Text style={styles.listItem}>- Developed and maintained responsive websites for clients.</Text>
          <Text style={styles.listItem}>- Collaborated with designers and backend developers to create high-quality user experiences.</Text>
          <Text style={styles.listItem}>- Implemented modern JavaScript frameworks and CSS libraries.</Text>

          <Text style={{ ...styles.text, fontWeight: 'bold', marginTop: 10 }}>Web Developer</Text>
          <Text style={styles.text}>Another Company | Jun 2018 - Dec 2020</Text>
          <Text style={styles.listItem}>- Designed and developed full-stack web applications.</Text>
          <Text style={styles.listItem}>- Utilized Agile methodologies for project management.</Text>
          <Text style={styles.listItem}>- Improved website performance by 20% through optimization.</Text>
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>Education</Text>
          <Text style={styles.text}>Bachelor of Science in Computer Science - University Name | Graduated: 2018</Text>
        </View>

        {/* Certifications Section */}
        <View style={styles.section}>
          <Text style={styles.heading}>Certifications</Text>
          <Text style={styles.text}>Certified Web Developer, ABC Certification</Text>
        </View>
      </Page>
    </Document>
  );
}
