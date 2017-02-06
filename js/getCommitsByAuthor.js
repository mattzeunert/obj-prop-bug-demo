export default function(){
    var commitsByAuthor = {}
    commits.forEach(function(commit){
        var author = commit.commit.author.name
        if (!commitsByAuthor[author]) {
            commitsByAuthor[author] = []
        }

        commitsByAuthor[author].push(commit.commit)
    })
    return commitsByAuthor
}