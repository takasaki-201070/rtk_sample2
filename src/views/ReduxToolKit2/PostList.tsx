import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import {
  Table,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { selectPost, selectAllPosts } from "./sampleSlice";
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minWidth: "300px",
  },
  table: {
    tableLayout: "fixed",
    minWidth: 350,
  },

  small: {
    margin: "auto",
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const PostList: React.FC = () => {
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();
  const allPosts = useSelector(selectAllPosts);

  return (
    <div>
      {allPosts[0]?.id > 0 && (
        <TableContainer className={classes.container}>
          <Table
            stickyHeader
            // size="small"
            className={classes.table}
            aria-label="sticky table"
          >
            <colgroup>
              <col style={{ width: "100px" }} />
              <col style={{ width: "auto" }} />
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <strong>No</strong>
                </TableCell>
                <TableCell align="center">
                  <strong>title</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allPosts.map((post, rowIndex) => (
                <TableRow hover key={rowIndex}>
                  <TableCell
                    align="center"
                    key={`${rowIndex}+1`}
                    onClick={() => {
                      dispatch(selectPost(post));
                    }}
                  >
                    {post.id}
                  </TableCell>
                  <TableCell
                    align="left"
                    key={`${rowIndex}+2`}
                    onClick={() => {
                      dispatch(selectPost(post));
                    }}
                  >
                    {post.title}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default PostList;
