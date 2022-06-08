import Colors from '../../utils/Colors';

const styles = {
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 8,
  },
  cardContainer: {
    flex: 1,
    padding: 12,
    margin: 4,
  },
  title: {
    fontWeight: 'bold',
    paddingBottom: 10,
    color: Colors.primary,
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 25,
  },
  noPostFoundText: {
    textAlign: 'center',
    fontSize: 17,
    paddingBottom: 20,
  },
};

export default styles;
