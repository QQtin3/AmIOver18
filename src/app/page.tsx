import styles from "@/app/Home.module.css";

export default function Page() {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>AmIOver18</h1>
			<p className={styles.subtitle}>
				Prove your age without revealing anything else.
			</p>
		</main>
	);
}
