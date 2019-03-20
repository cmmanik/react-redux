const init = [
  { title: 'This is the first title', body: 'this is the first post body' },
  { title: 'This is the second title', body: 'this is the second post body' },
  { title: 'This is the third title', body: 'this is the third post body' },
  { title: 'This is the four title', body: 'this is the four post body' },
  { title: 'This is the five title', body: 'this is the five post body' },
];

const rootReducer = (state = init, action) => state;
export default rootReducer;
