import React, { useState } from 'react';
import './EventBubblingDemo.module.scss';

interface LogEntry {
	id: number;
	message: string;
	timestamp: string;
	element: string;
}

const EventBubblingDemo: React.FC = () => {
	const [logs, setLogs] = useState<LogEntry[]>([]);
	const [preventBubbling, setPreventBubbling] = useState(false);
	const [stopPropagation, setStopPropagation] = useState(false);

	const addLog = (message: string, element: string) => {
		const newLog: LogEntry = {
			id: Date.now(),
			message,
			timestamp: new Date().toLocaleTimeString(),
			element,
		};
		setLogs(prev => [newLog, ...prev.slice(0, 9)]); // Keep only last 10 logs
	};

	const handleOuterClick = (e: React.MouseEvent) => {
		addLog('Outer div clicked', 'Outer');
		if (stopPropagation) {
			e.stopPropagation();
			addLog('Event propagation stopped', 'Outer');
		}
	};

	const handleMiddleClick = (e: React.MouseEvent) => {
		addLog('Middle div clicked', 'Middle');
		if (stopPropagation) {
			e.stopPropagation();
			addLog('Event propagation stopped', 'Middle');
		}
	};

	const handleInnerClick = (e: React.MouseEvent) => {
		addLog('Inner div clicked', 'Inner');
		if (stopPropagation) {
			e.stopPropagation();
			addLog('Event propagation stopped', 'Inner');
		}
	};

	const handleButtonClick = (e: React.MouseEvent) => {
		addLog('Button clicked', 'Button');
		if (preventBubbling) {
			e.preventDefault();
			addLog('Default behavior prevented', 'Button');
		}
		if (stopPropagation) {
			e.stopPropagation();
			addLog('Event propagation stopped', 'Button');
		}
	};

	const clearLogs = () => {
		setLogs([]);
	};

	return (
		<div className="event-bubbling-demo">
			<h1>Event Bubbling Demo</h1>

			<div className="controls">
				<div className="control-group">
					<label>
						<input
							type="checkbox"
							checked={preventBubbling}
							onChange={(e) => setPreventBubbling(e.target.checked)}
						/>
						Prevent Default Behavior
					</label>
					<label>
						<input
							type="checkbox"
							checked={stopPropagation}
							onChange={(e) => setStopPropagation(e.target.checked)}
						/>
						Stop Event Propagation
					</label>
				</div>
				<button onClick={clearLogs} className="clear-btn">
					Clear Logs
				</button>
			</div>

			<div className="demo-container">
				<div className="clickable-area">
					<div
						className="outer-div"
						onClick={handleOuterClick}
					>
						<p>Outer Div (Click me!)</p>
						<div
							className="middle-div"
							onClick={handleMiddleClick}
						>
							<p>Middle Div (Click me!)</p>
							<div
								className="inner-div"
								onClick={handleInnerClick}
							>
								<p>Inner Div (Click me!)</p>
								<button
									className="demo-button"
									onClick={handleButtonClick}
								>
									Button (Click me!)
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="logs-container">
					<h3>Event Log</h3>
					<div className="logs">
						{logs.length === 0 ? (
							<p className="no-logs">Click on the elements above to see event bubbling in action!</p>
						) : (
							logs.map(log => (
								<div key={log.id} className={`log-entry ${log.element.toLowerCase()}`}>
									<span className="timestamp">[{log.timestamp}]</span>
									<span className="element">[{log.element}]</span>
									<span className="message">{log.message}</span>
								</div>
							))
						)}
					</div>
				</div>
			</div>

			<div className="explanation">
				<h3>How Event Bubbling Works</h3>
				<ul>
					<li><strong>Event Bubbling:</strong> When you click on an element, the event "bubbles up" through all parent elements</li>
					<li><strong>Event Order:</strong> Events are triggered from the innermost element to the outermost element</li>
					<li><strong>stopPropagation():</strong> Prevents the event from bubbling up to parent elements</li>
					<li><strong>preventDefault():</strong> Prevents the default browser behavior (like form submission)</li>
				</ul>

				<div className="example-flow">
					<h4>Example Event Flow (without stopPropagation):</h4>
					<ol>
						<li>Button clicked</li>
						<li>Inner div clicked</li>
						<li>Middle div clicked</li>
						<li>Outer div clicked</li>
					</ol>
				</div>
			</div>
		</div>
	);
};

export default EventBubblingDemo; 