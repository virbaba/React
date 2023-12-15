<!DOCTYPE html>
<html lang="en">
  <head>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <title>React App</title>

  </head>

  <body>
    <div id="root"></div>
    <script type="text/babel">
      const timeTable = {
        Monday: {
          9: {
            subject: "Maths",
            teacher: "Brijesh Mishra",
            time: "1 hour"
          },
          10: {
            subject: "Physics",
            teacher: "Sumit Yadav",
            time: "1 hour"
          },
          11: {
            subject: "Chemistry",
            teacher: "Vedanti Joshi",
            time: "1 hour"
          },
          13: {
            subject: "English Litrature",
            teacher: "Mayur Pandey",
            time: "1 hour"
          },
          14: {
            subject: "Hindi Vyakaran",
            teacher: "Sony Desai",
            time: "1 hour"
          },
          15: {
            subject: "PT",
            teacher: "Sonu Tyagi",
            time: "1 hour"
          }
        },
        Tuesday: {
          9: {
            subject: "Physics",
            teacher: "Sumit Yadav",
            time: "1 hour"
          },
          10: {
            subject: "Hindi Sahitya",
            teacher: "Ramesh Jha",
            time: "1 hour"
          },
          11: {
            subject: "Environtal Studies",
            teacher: "Rakesh Prakash",
            time: "1 hour"
          },
          13: {
            subject: "Biology",
            teacher: "Kuldeep Narayan",
            time: "1 hour"
          },
          14: {
            subject: "Maths",
            teacher: "Brijesh Mishra",
            time: "1 hour"
          },
          15: {
            subject: "Physics Practical",
            teacher: "Sumit Yadav",
            time: "1 hour"
          }
        },
        Wednesday: {
          9: {
            subject: "Chemistry",
            teacher: "Vedanti Joshi",
            time: "1 hour"
          },
          10: {
            subject: "English Grammar",
            teacher: "Aditi Upasane",
            time: "1 hour"
          },
          11: {
            subject: "Maths",
            teacher: "Brijesh Mishra",
            time: "1 hour"
          },
          13: {
            subject: "English Litrature",
            teacher: "Mayur Pandey",
            time: "1 hour"
          },
          14: {
            subject: "Physics",
            teacher: "Sumit Yadav",
            time: "1 hour"
          },
          15: {
            subject: "Chemistry Practical",
            teacher: "Vedanti Joshi",
            time: "1 hour"
          }
        },
        Thursday: {
          9: {
            subject: "Biology",
            teacher: "Kuldeep Narayan",
            time: "1 hour"
          },
          10: {
            subject: "Hindi Sahitya",
            teacher: "Ramesh Jha",
            time: "1 hour"
          },
          11: {
            subject: "Chemistry",
            teacher: "Vedanti Joshi",
            time: "1 hour"
          },
          13: {
            subject: "Maths",
            teacher: "Brijesh Mishra",
            time: "1 hour"
          },
          14: {
            subject: "Physics",
            teacher: "Sumit Yadav",
            time: "1 hour"
          },
          15: {
            subject: "Biology Practical",
            teacher: "Kuldeep Narayan",
            time: "1 hour"
          }
        },
        Friday: {
          9: {
            subject: "English Litrature",
            teacher: "Mayur Pandey",
            time: "1 hour"
          },
          10: {
            subject: "Hindi Sahitya",
            teacher: "Ramesh Jha",
            time: "1 hour"
          },
          11: {
            subject: "English Grammar",
            teacher: "Aditi Upasane",
            time: "1 hour"
          },
          13: {
            subject: "Biology",
            teacher: "Kuldeep Narayan",
            time: "1 hour"
          },
          14: {
            subject: "Hindi Vyakaran",
            teacher: "Sony Desai",
            time: "1 hour"
          },
          15: {
            subject: "PT",
            teacher: "Sonu Tyagi",
            time: "1 hour"
          }
        }
      };

   const App = () => {
  const daysOfWeek = Object.keys(timeTable);

  return (
    <>
      <table border="1">
        <caption>School time-table of a class 12th Student.</caption>
        <thead>
          <tr>
            <th></th>
            <th>9am-10am</th>
            <th>10am-11am</th>
            <th>11am-12pm</th>
            <th>12noon-1pm</th>
            <th>1pm-2pm</th>
            <th>2pm-3pm</th>
            <th>3pm-4pm</th>
          </tr>
        </thead>

        <tbody>
          {daysOfWeek.map(day => (
            <tr key={day}>
              <th>{day}</th>
              {[9, 10, 11, 12, 13, 14, 15].map(hour => (
                <td key={hour}>
                  {timeTable[day][hour] ? (
                    <>
                      {timeTable[day][hour].subject}
                    </>
                  ) : (
                    'Break'
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
    </script>

  </body>
</html>
