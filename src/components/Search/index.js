import React from 'react';

export default ({ search }) => {
    if (!search) return <h1> Awaiting your search entry...</h1>
    return (
        <form>
            <div class="form-group">
                <label for="search">Search</label>
                <input type="email" class="form-control" id="search" aria-describedby="search" placeholder="Search" name="search">
            </div>
        </form>
    )
}