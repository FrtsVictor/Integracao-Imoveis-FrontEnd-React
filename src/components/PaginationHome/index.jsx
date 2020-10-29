import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControlled({ pageable, getPages }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);

  return (
    <div className={classes.root}>
      <Pagination
        count={pageable.paginacao.totalPaginas || 0}
        page={page}
        onChange={(event, value) => {
          setPage(value);
          getPages(value + 1);
        }}
      />
    </div>
  );
}
