import React, { useEffect, useState } from 'react';
import styles from './TableGenerator.module.scss';

type TableGeneratorProps = {};

interface FormData {
  rows: number;
  cols: number;
}

interface FormErrors {
  rows?: string;
  cols?: string;
}

const TableGenerator: React.FC<TableGeneratorProps> = () => {
  const [table, setTable] = useState<number[][]>();
  const [formData, setFormData] = useState<FormData>({
    rows: 1,
    cols: 1
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (formData.rows < 1 || formData.rows > 100) {
      newErrors.rows = 'Rows must be between 1 and 100';
    }
    
    if (formData.cols < 1 || formData.cols > 100) {
      newErrors.cols = 'Columns must be between 1 and 100';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = parseInt(value) || 0;
    
    setFormData((prev) => ({ ...prev, [name]: numValue }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const buildTable = () => {
    let matrix = Array.from({ length: formData.rows }, () => Array.from({ length: formData.cols }, () => 0));

    let count = 1;
    let colStart = 0;
    let colEnd = formData.cols;
    let rowStart = 0;
    let rowEnd = formData.rows;
    
    while (colStart < colEnd) {
      // first Col
      for (let r = rowStart; r < rowEnd; r++) {
        matrix[r][colStart] = count;
        count++;
      }
      colStart++;
      if (!(colStart < colEnd)) {
        break;
      }
      // next col reverse
      for (let r = rowEnd - 1; r >= rowStart; r--) {
        matrix[r][colStart] = count;
        count++;
      }
      colStart++;
    }
    
    setTable(matrix);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    buildTable();
    setIsSubmitting(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isSubmitting) {
      handleSubmit(e as any);
    }
  };

  useEffect(() => {
    console.log("formData: ", formData);
  }, [formData]);

  return (
    <div className={styles.table_generator} role="main" aria-labelledby="table-generator-title">
      <h2 id="table-generator-title">Table Generator</h2>
      
      <form 
        onSubmit={handleSubmit}
        aria-describedby="form-instructions"
        noValidate
      >
        <div id="form-instructions" className="sr-only">
          Enter the number of rows and columns to generate a spiral table pattern.
        </div>
        
        <fieldset>
          <legend className="sr-only">Table Dimensions</legend>
          
          <div className={styles.form_group}>
            <label htmlFor="rows" id="rows-label">
              Number of Rows
              <span aria-label="required" aria-hidden="true">*</span>
            </label>
            <input
              id="rows"
              name="rows"
              type="number"
              min="1"
              max="100"
              value={formData.rows}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              aria-labelledby="rows-label"
              aria-describedby={errors.rows ? "rows-error" : "rows-help"}
              aria-invalid={!!errors.rows}
              aria-required="true"
              required
            />
            {errors.rows && (
              <div id="rows-error" className={styles.error} role="alert" aria-live="polite">
                {errors.rows}
              </div>
            )}
            <div id="rows-help" className={styles.help_text}>
              Enter a number between 1 and 100
            </div>
          </div>
          
          <div className={styles.form_group}>
            <label htmlFor="cols" id="cols-label">
              Number of Columns
              <span aria-label="required" aria-hidden="true">*</span>
            </label>
            <input
              id="cols"
              name="cols"
              type="number"
              min="1"
              max="100"
              value={formData.cols}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              aria-labelledby="cols-label"
              aria-describedby={errors.cols ? "cols-error" : "cols-help"}
              aria-invalid={!!errors.cols}
              aria-required="true"
              required
            />
            {errors.cols && (
              <div id="cols-error" className={styles.error} role="alert" aria-live="polite">
                {errors.cols}
              </div>
            )}
            <div id="cols-help" className={styles.help_text}>
              Enter a number between 1 and 100
            </div>
          </div>
        </fieldset>
        
        <button 
          type="submit"
          disabled={isSubmitting}
          aria-describedby="submit-help"
        >
          {isSubmitting ? 'Generating...' : 'Generate Table'}
        </button>
        <div id="submit-help" className={styles.help_text}>
          Press Enter or click to generate the spiral table pattern
        </div>
      </form>
      
      {table && (
        <section aria-labelledby="table-section-title">
          <h3 id="table-section-title">Generated Table</h3>
          <div className={styles.table_container} role="region" aria-label="Generated spiral table">
            <table 
              className={styles.table}
              role="table"
              aria-label={`Spiral table with ${formData.rows} rows and ${formData.cols} columns`}
              aria-describedby="table-description"
            >
              <caption id="table-description" className="sr-only">
                A table showing a spiral pattern of numbers from 1 to {formData.rows * formData.cols}
              </caption>
              <tbody className={styles.table__body}>
                {table.map((row, rowIndex) => (
                  <tr key={rowIndex} className={styles.table__row}>
                    {row.map((cell, colIndex) => (
                      <td 
                        key={colIndex} 
                        className={styles.table__col}
                        role="cell"
                        aria-label={`Cell at row ${rowIndex + 1}, column ${colIndex + 1} contains value ${cell}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
};

export default TableGenerator; 