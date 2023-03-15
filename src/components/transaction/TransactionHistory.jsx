import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return <table className={css.transactionhistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody> {items.map((item,index) => <tr key={item.id}>
                <td className={css.name}>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
    </tr>)}
  </tbody>
</table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string
})).isRequired,
}