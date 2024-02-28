import { Link } from 'react-router-dom';
import ReportIndexItem from './ReportIndexItem';
import { resetDatabase } from '../mocks/storage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllReports } from '../store/reports';


const ReportsIndex = () => {
  const reports = []
  const dispatch = useDispatch();
  const reportState = useSelector(state => state.reports)
  // populate from Redux store
  // console.log("/////////////", reportState)
  const keys = Object.keys(reportState)
  keys.forEach(key => {
    reports.push(reportState[key])
  })

  useEffect(() => {
    dispatch(getAllReports())
  }, [dispatch]);
  // reports.push(...reportState)

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    <section>
      <ul>
        {reports.map((report) => (
          <ReportIndexItem
            report={report}
            key={report.id}
          />
        ))}
      </ul>
      <Link
        className="back-button new"
        to="/reports/new"
      >
        New Report
      </Link>
      <button onClick={resetDatabase}>Reset the Database</button>
    </section>
  );
};

export default ReportsIndex;
