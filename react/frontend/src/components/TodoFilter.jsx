// export default function TodoFilter({ filter, changeFilter }) {
//     return (
//         <div>
//             <label htmlFor="filter">Filter</label>
//             <select onChange={(e) => changeFilter(e.target.value)}
//                 id="filter"
//                 name="filter"
//             >
//                 {filterText.map((filterText) => {
//                     <option selected={filter === filterText} value={filterText}>
//                         {capitalize(filterText)}
//                     </option>
//                 })}
//             </select>
//         </div> 
//     )
// }