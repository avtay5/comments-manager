import Colors from '../../utils/Colors';

const styles = {
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.white,
  },
  postContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
  subContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  commentText: {
    fontWeight: '500',
    marginBottom: 5,
    fontSize: 13,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: Colors.primary,
    fontSize: 16,
  },
  commentsContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.lightGrey,
  },
  userContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  nameText: {
    fontWeight: '500',
    marginBottom: 3,
  },
  emailText: {
    fontWeight: '300',
    fontSize: 13,
  },
  flatListStyle: {
    flex: 1,
    margin: 5,
  },
};

export default styles;
