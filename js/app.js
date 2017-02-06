import showAuthorTable from "./showAuthorTable"
import getCommitsByAuthor from "./getCommitsByAuthor"

window.commitsByAuthor = getCommitsByAuthor();
showAuthorTable(commitsByAuthor)
