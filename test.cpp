
#include <iostream>
#include <queue>
using namespace std;

class Process {
public:
    int pid;
    int arrivalTime;
    int burstTime;
    int waitingTime;
    int turnaroundTime;
    int remainingTime;

    Process(int pid, int arrivalTime, int burstTime) {
        this->pid = pid;
        this->arrivalTime = arrivalTime;
        this->burstTime = burstTime;
        this->remainingTime = burstTime;
    }
};

void roundRobin(queue<Process>& processes, int quantum) {
    int currentTime = 0;
    int totalWaitingTime = 0;
    int totalTurnaroundTime = 0;

    while (!processes.empty()) {
        Process process = processes.front();
        processes.pop();

        if (process.arrivalTime > currentTime) {
            currentTime = process.arrivalTime;
        }

        int executedTime = min(quantum, process.remainingTime);
        process.remainingTime -= executedTime;
        currentTime += executedTime;

        if (process.remainingTime > 0) {
            process.waitingTime = currentTime - process.arrivalTime - process.burstTime + process.remainingTime;
            processes.push(process);
        } else {
            process.turnaroundTime = currentTime - process.arrivalTime;
            process.waitingTime = process.turnaroundTime - process.burstTime;
            totalWaitingTime += process.waitingTime;
            totalTurnaroundTime += process.turnaroundTime;
        }
    }

    cout << "Average Waiting Time: " << (float)totalWaitingTime / processes.size() << endl;
    cout << "Average Turnaround Time: " << (float)totalTurnaroundTime / processes.size() << endl;
}

int main() {
    queue<Process> processes;
    processes.push(Process(1, 0, 10));
    processes.push(Process(2, 2, 5));
    processes.push(Process(3, 4, 8));

    int quantum = 3;
    roundRobin(processes, quantum);

    return 0;
}
