import React from 'react'

const Filter = () => {
  return (
    <aside>
      <header>Filter</header>
      <div className="status">
        <ul>
          <li><button>Alive</button></li>
          <li><button>Dead</button></li>
          <li><button>Unknown</button></li>
        </ul>
      </div>
    </aside>
  )
}

export default Filter