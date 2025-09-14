import React, { useEffect, useState } from 'react';
import styles from './TableGenerator.module.scss';

type TableGeneratorProps = {};

interface FormData {
  rows: number;
  cols: number;
}

const TableGenerator: React.FC<TableGeneratorProps> = () => {
  const [table, setTable] = useState<number[][]>();
  const [formData, setFormData] = useState<FormData>({
    rows: 1,
    cols: 1
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const buildTable = () => {
    let matrix = Array.from({ length: formData.rows }, () => Array.from({ length: formData.cols }, () => 0))

    let count = 1
    let colStart = 0;
    let colEnd = formData.cols;
    let rowStart = 0;
    let rowEnd = formData.rows;
    while (colStart < colEnd) {
      // first Col
      for (let r = rowStart; r < rowEnd; r++) {
        matrix[r][colStart] = count
        count++
      }
      colStart++
      if (!(colStart < colEnd)) {
        break
      }
      // next col reverse
      for (let r = rowEnd - 1; r >= rowStart; r--) {
        matrix[r][colStart] = count
        count++
      }
      colStart++
    }
    console.log("matrix: ", matrix)
    setTable(matrix)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    buildTable()

    console.log("submit")
  }



  useEffect(() => {
    console.log("formData: ", formData)
    // setCount(formData.rows * formData.cols)
  }, [formData])

  return (
    <div className={styles.table_generator}>
      <h2>Table Generator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='rows'>
            <span aria-label='required'>rows</span>
          </label>
          <input value={formData.rows} min="1" name="rows" onChange={handleChange} type="number" required></input>
          <div></div>
        </div>
        <div>
          <label htmlFor='cols'>
            <span aria-label='required'>columns</span>
          </label>
          <input value={formData.cols} min="1" name="cols" onChange={handleChange} type="number" required></input>
          <div></div>
        </div>
        <button type="submit">Submit</button>


      </form>
      <div>
        <div>Table</div>
        <table className={styles.table}>
          <tbody className={styles.table__body}>
            {table?.map((_, r) => (
              <tr key={r} className={styles.table__row}>
                {table[r].map((co, c) => (
                  <td key={c} className={styles.table__col}>{co}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableGenerator; 